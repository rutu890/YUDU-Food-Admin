import { env } from "../config/env";
import { http } from "./client";
import { seedCoupons, seedOrders, seedPartners, seedPromos, seedRestaurants, seedRiders } from "../mocks/data";

const wait = (ms=250) => new Promise(resolve => setTimeout(resolve, ms));
let promos=[...seedPromos], coupons=[...seedCoupons], partners=[...seedPartners], restaurants=[...seedRestaurants], orders=[...seedOrders];

export const api = {
  stats: async () => env.USE_MOCKS ? (await wait(), {revenuePaise:186000000,orders:12480,customers:8214,restaurants:186,revenueChange:12.4,ordersChange:8.2}) : (await http.get("/admin/stats")).data,
  promos: {
    list: async () => env.USE_MOCKS ? (await wait(), [...promos]) : (await http.get("/admin/promos")).data,
    create: async item => env.USE_MOCKS ? (await wait(), promos=[{...item,id:`PR-${Date.now()}`},...promos]) : (await http.post("/admin/promos",item)).data,
    toggle: async id => env.USE_MOCKS ? (await wait(), promos=promos.map(p=>p.id===id?{...p,active:!p.active}:p)) : (await http.put(`/admin/promos/${id}`,{})).data,
    remove: async id => env.USE_MOCKS ? (await wait(), promos=promos.filter(p=>p.id!==id)) : (await http.delete(`/admin/promos/${id}`)).data
  },
  coupons: {
    list: async () => env.USE_MOCKS ? (await wait(), [...coupons]) : (await http.get("/admin/coupons")).data,
    create: async item => env.USE_MOCKS ? (await wait(), coupons=[{...item,id:`CP-${Date.now()}`,usage:0},...coupons]) : (await http.post("/admin/coupons",item)).data,
    toggle: async id => env.USE_MOCKS ? (await wait(), coupons=coupons.map(c=>c.id===id?{...c,active:!c.active}:c)) : (await http.put(`/admin/coupons/${id}`,{})).data
  },
  partners: {
    list: async () => env.USE_MOCKS ? (await wait(), [...partners]) : (await http.get("/admin/partner-applications")).data,
    decide: async (id,status) => env.USE_MOCKS ? (await wait(), partners=partners.map(p=>p.id===id?{...p,status}:p)) : (await http.post(`/admin/partner-applications/${id}/${status.toLowerCase()}`)).data
  },
  restaurants: {
    list: async () => env.USE_MOCKS ? (await wait(), [...restaurants]) : (await http.get("/admin/restaurants")).data,
    toggle: async id => env.USE_MOCKS ? (await wait(), restaurants=restaurants.map(r=>r.id===id?{...r,available:!r.available}:r)) : (await http.put(`/admin/restaurants/${id}`,{})).data,
    toggleItem: async (rid,iid) => env.USE_MOCKS ? (await wait(), restaurants=restaurants.map(r=>r.id===rid?{...r,menu:r.menu.map(m=>m.id===iid?{...m,inStock:!m.inStock}:m)}:r)) : (await http.put(`/admin/menu-items/${iid}`,{})).data
  },
  orders: {
    list: async () => env.USE_MOCKS ? (await wait(), [...orders]) : (await http.get("/admin/orders")).data,
    update: async (id,status) => env.USE_MOCKS ? (await wait(), orders=orders.map(o=>o.id===id?{...o,status}:o)) : (await http.post(`/admin/orders/${id}/status`,{status})).data
  },
  riders: { list: async () => env.USE_MOCKS ? (await wait(), seedRiders) : (await http.get("/admin/riders")).data }
};
