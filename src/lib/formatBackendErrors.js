export function formatBackendErrors(error) {
  if (!error) return "Something went wrong";
  const errors = error?.response?.data?.errors;

  if (errors && typeof errors === "object") {
    const messages = Object.values(errors)
      .flat()
      .filter(Boolean);

    if (messages.length > 0) {
      return messages.join(", ");
    }
  }

  if (error?.response?.data?.message) {
    return error?.response?.data?.message;
  }

  if (error?.message) {
    return error.message;
  }

  return "Something went wrong";
}
