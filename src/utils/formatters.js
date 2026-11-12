export const money = (paise) => new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(paise/100);
export const shortDate = (value) => new Date(value).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});
