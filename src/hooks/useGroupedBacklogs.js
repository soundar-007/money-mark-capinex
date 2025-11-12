import { useMemo } from "react";

const useGroupedBacklogs = (data) => {
  const groupedData = useMemo(() => {
    if (!Array.isArray(data)) {
      return {
        ToDo: [],
        Discussion: [],
        Followup: [],
        Closed: [],
      };
    }

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const formatDateTime = (isoStr) => {
      if (!isoStr) return "";
      const dt = new Date(isoStr);
      const pad = (n) => (n < 10 ? "0" + n : n);
      return (
        pad(dt.getDate()) +
        "/" +
        pad(dt.getMonth() + 1) +
        "/" +
        dt.getFullYear() +
        " " +
        pad(dt.getHours()) +
        ":" +
        pad(dt.getMinutes())
      );
    };

    const newGroupedData = {
      ToDo: [],
      Discussion: [],
      Followup: [],
      Closed: [],
    };

    data.forEach((item) => {
      const key = capitalize(item.action || "");
      if (key in newGroupedData) {
        newGroupedData[key].push({
          name: item.name || "",
          phone: (item.phone_number || "").replace("+91", ""),
          source: item.type || "",
          time: formatDateTime(item.created_at),
          assignee: item.created_by_name || "",
          duration: (item.days || "").replace("D", " d"),
        });
      }
    });

    return newGroupedData;
  }, [data]);

  return groupedData;
};

export default useGroupedBacklogs;
