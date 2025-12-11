export const maskPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return "";
    
    const str = String(phoneNumber);
    
    if (str.length <= 4) return str;
    
    const last4 = str.slice(-4);
  
    return "*****" + last4;
};
