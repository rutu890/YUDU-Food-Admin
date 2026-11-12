import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IndianRupee, ShoppingBag, Users, Store, Clock3, Download, Bell, CreditCard, UserRound, TrendingUp, ArrowUpRight, Search, CalendarDays, Activity, ListChecks } from "lucide-react";
import { toast } from "sonner";
import { api } from "../api/services";
import { playSoftTone } from "../utils/feedback";

const chartValues = [34,39,44,53,67,73,72,67,64,68,76,86,91,87,84,89,98,112];
const recentOrders = [
  {id:"#YD-20481",customer:"Ravi Kumar",restaurant:"Spice Route",amount:640,status:"Delivered"},
  {id:"#YD-20482",customer:"Anita Rao",restaurant:"Biryani House",amount:820,status:"Preparing"},
  {id:"#YD-20483",customer:"Imran Khan",restaurant:"Dosa Corner",amount:310,status:"Pending"},
  {id:"#YD-20484",customer:"Priya S.",restaurant:"Pizza Hub",amount:980,status:"Cancelled"},
  {id:"#YD-20485",customer:"Suresh Reddy",restaurant:"Spice Route",amount:1240,status:"Delivered"}
];
function SalesChart(){const points=chartValues.map((v,i)=>`${(i/(chartValues.length-1))*100},${125-v}`).join(" ");const area=`0,125 ${points} 100,125`;return <div className="sales-chart"><div className="sales-grid"><i/><i/><i/><i/></div><svg viewBox="0 0 100 125" preserveAspectRatio="none" role="img" aria-label="Sales and revenue trend"><defs><linearGradient id="salesFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#6423c4" stopOpacity=".18"/><stop offset="100%" stopColor="#6423c4" stopOpacity=".015"/></linearGradient></defs><polygon points={area} fill="url(#salesFill)"/><polyline points={points} fill="none" stroke="#6423c4" strokeWidth="1.05" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" className="sales-line"/></svg><div className="chart-months"><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span></div></div>}
function Donut(){return <div className="donut" aria-label="Orders by status"><div/></div>}
function Skeleton(){return <div className="stat-card skeleton-card"><i/><i/><i/></div>}
export default function Dashboard(){
 const {data,isLoading}=useQuery({queryKey:["stats"],queryFn:api.stats,staleTime:30000});
 const {data:orders,isLoading:ordersLoading}=useQuery({queryKey:["orders"],queryFn:api.orders.list,staleTime:20000});
 const [range,setRange]=useState("Last 30 days");
 const stats=data||{revenuePaise:186000000,orders:12480,customers:8214,restaurants:186,revenueChange:12.4,ordersChange:8.2};
 const rows=useMemo(()=>recentOrders.map((r,i)=>({...r,...(orders?.[i]?{id:`#${orders[i].id}`,customer:orders[i].customer,restaurant:orders[i].restaurant,amount:Math.round(orders[i].amountPaise/100),status:orders[i].status?.charAt(0)+orders[i].status?.slice(1).toLowerCase()}: {})})),[orders]);
 const exportCsv=()=>{playSoftTone();const csv=["Order,Customer,Restaurant,Amount,Status",...rows.map(r=>[r.id,r.customer,r.restaurant,r.amount,r.status].join(","))].join("\n");const url=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));const a=document.createElement("a");a.href=url;a.download="recent-orders.csv";a.click();URL.revokeObjectURL(url);toast.success("Dashboard report exported",{description:"Your recent orders CSV is ready."});};
 return <div className="yudu-dashboard">
  <div className="page-header yudu-page-header"><div><h1>Dashboard Overview</h1><p>Welcome back, Sourav. Here is what is happening on Yudu today.</p></div><div className="dashboard-actions"><button className="btn btn-outline" onClick={exportCsv}><Download size={16}/> Export</button><button className="btn btn-primary range-button" onClick={()=>setRange(r=>r==="Last 30 days"?"Last 7 days":"Last 30 days")}><Clock3 size={16}/>{range}</button></div></div>
  <div className="yudu-stats">{isLoading?<>{[1,2,3,4,5].map(n=><Skeleton key={n}/>)}</>:<>
   <Stat label="Total Orders" value={stats.orders.toLocaleString("en-IN")} note="+8.2% vs last month" icon={<ShoppingBag/>}/>
   <Stat label="Total Revenue" value="₹18.6L" note="+12.4% vs last month" icon={<CreditCard/>}/>
   <Stat label="Total Customers" value="8,214" note="+312 new this month" icon={<UserRound/>}/>
   <Stat label="Active Restaurants" value={String(stats.restaurants)} note="14 offline now" warn icon={<Store/>}/>
   <Stat label="Pending Orders" value="42" note="Needs attention" warn icon={<Clock3/>}/>
  </>}</div>
  <div className="yudu-charts"><section className="panel sales-panel"><div className="panel-heading"><h3>Sales &amp; revenue</h3><span className="live-dot">Live updates</span></div><SalesChart/></section><section className="panel status-panel"><div className="panel-heading centered-heading"><h3>Orders by status</h3></div><Donut/><div className="donut-legend">{[["Delivered","62%","#6423c4"],["Preparing","18%","#16a34a"],["Pending","12%","#f59e0b"],["Cancelled","8%","#ef2929"]].map(([n,v,c])=><div key={n}><span><i style={{background:c}}/>{n}</span><b>{v}</b></div>)}</div></section></div>
  <section className="panel recent-orders-panel"><div className="panel-heading"><h3>Recent orders</h3><button className="text-button" onClick={()=>toast.info("Orders view",{description:"Use Orders in the sidebar to manage all orders."})}>View all <ArrowUpRight size={14}/></button></div>{ordersLoading?<div className="table-skeleton">{[1,2,3,4,5].map(n=><i key={n}/>)}</div>:<div className="table-wrap yudu-table-wrap"><table className="yudu-table"><thead><tr><th>ORDER</th><th>CUSTOMER</th><th>RESTAURANT</th><th>AMOUNT</th><th>STATUS</th></tr></thead><tbody>{rows.map(r=><tr key={r.id}><td><b>{r.id}</b></td><td>{r.customer}</td><td>{r.restaurant}</td><td>₹{r.amount.toLocaleString("en-IN")}</td><td><span className={`order-status ${r.status.toLowerCase()}`}>{r.status}</span></td></tr>)}</tbody></table></div>}</section>
 </div>;
}
function Stat({label,value,note,icon,warn}){return <div className="stat-card yudu-stat"><div className="stat-top"><span>{label}</span><span className="stat-icon">{icon}</span></div><strong>{value}</strong><small className={warn?"stat-warn":"positive"}>{note}</small></div>}
