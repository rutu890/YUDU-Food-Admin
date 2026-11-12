export const seedPromos = [
  { id:"PR-101", title:"Monsoon Feast", slot:"HOME_CAROUSEL", city:"Pune", priority:1, start:"2026-11-01", end:"2026-11-30", active:true, image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600" },
  { id:"PR-102", title:"Weekend Specials", slot:"OFFER_STRIP", city:"Mumbai", priority:2, start:"2026-11-05", end:"2026-11-20", active:true, image:"https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600" }
];
export const seedCoupons = [
  { id:"CP-101", code:"WELCOME50", type:"FLAT", value:50, minOrderPaise:19900, usage:428, limit:1000, active:true },
  { id:"CP-102", code:"FOOD20", type:"PERCENT", value:20, minOrderPaise:29900, usage:760, limit:1000, active:true },
  { id:"CP-103", code:"LUNCH100", type:"FLAT", value:100, minOrderPaise:39900, usage:120, limit:500, active:false }
];
export const seedPartners = [
  { id:"PA-201", name:"The Green Bowl", owner:"Aarav Kulkarni", city:"Pune", phone:"9876543210", applied:"2026-11-10", status:"PENDING", documents:["FSSAI certificate","PAN card","Address proof"] },
  { id:"PA-202", name:"Spice Route Kitchen", owner:"Neha Sharma", city:"Mumbai", phone:"9876501234", applied:"2026-11-09", status:"PENDING", documents:["FSSAI certificate","GST certificate"] },
  { id:"PA-203", name:"Urban Tadka", owner:"Rohan Patil", city:"Nashik", phone:"9898989898", applied:"2026-11-07", status:"APPROVED", documents:["FSSAI certificate"] }
];
export const seedRestaurants = [
  { id:"RS-301", name:"The Green Bowl", city:"Pune", area:"Baner", rating:4.7, orders:324, available:true, cuisine:"Healthy · Salads", menu:[{id:"MI-1",name:"Paneer Power Bowl",section:"Signature Bowls",pricePaise:24900,veg:true,inStock:true},{id:"MI-2",name:"Grilled Chicken Bowl",section:"Signature Bowls",pricePaise:29900,veg:false,inStock:true}] },
  { id:"RS-302", name:"Spice Route Kitchen", city:"Mumbai", area:"Andheri", rating:4.5, orders:218, available:true, cuisine:"North Indian", menu:[{id:"MI-3",name:"Paneer Butter Masala",section:"Main Course",pricePaise:27900,veg:true,inStock:true},{id:"MI-4",name:"Chicken Biryani",section:"Rice & Biryani",pricePaise:32900,veg:false,inStock:false}] },
  { id:"RS-303", name:"Urban Tadka", city:"Nashik", area:"College Road", rating:4.3, orders:156, available:false, cuisine:"Street Food", menu:[{id:"MI-5",name:"Pav Bhaji",section:"Street Favourites",pricePaise:12000,veg:true,inStock:true}] }
];
export const seedOrders = [
  {id:"FD-8041",customer:"Isha Deshmukh",restaurant:"The Green Bowl",city:"Pune",amountPaise:48900,status:"PLACED",payment:"PAID",created:"2026-11-11T10:24:00"},
  {id:"FD-8040",customer:"Kabir Shah",restaurant:"Spice Route Kitchen",city:"Mumbai",amountPaise:72900,status:"PREPARING",payment:"PAID",created:"2026-11-11T10:18:00"},
  {id:"FD-8039",customer:"Mira Joshi",restaurant:"Urban Tadka",city:"Nashik",amountPaise:29900,status:"READY",payment:"COD",created:"2026-11-11T10:02:00"},
  {id:"FD-8038",customer:"Arjun Mehta",restaurant:"The Green Bowl",city:"Pune",amountPaise:55900,status:"DELIVERED",payment:"PAID",created:"2026-11-11T09:45:00"},
  {id:"FD-8037",customer:"Sara Khan",restaurant:"Spice Route Kitchen",city:"Mumbai",amountPaise:38900,status:"CANCELLED",payment:"PAID",created:"2026-11-11T09:31:00"}
];
export const seedRiders = [
  {id:"RD-401",name:"Amit Pawar",phone:"9876500001",city:"Pune",status:"VERIFIED",zone:"Baner"},
  {id:"RD-402",name:"Sahil More",phone:"9876500002",city:"Mumbai",status:"PENDING",zone:"Andheri"}
];
