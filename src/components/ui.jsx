import { Search, Plus } from "lucide-react";
export function PageHeader({title,subtitle,action}) { return <div className="page-header"><div><h1>{title}</h1><p>{subtitle}</p></div>{action}</div>; }
export function Badge({children,tone="neutral"}) { return <span className={`badge badge-${tone}`}>{children}</span>; }
export function StatCard({label,value,change,icon}) { return <div className="stat-card"><div className="stat-top"><span>{label}</span><span className="stat-icon">{icon}</span></div><strong>{value}</strong><small className="positive">↗ {change} vs last month</small></div>; }
export function SearchBox({value,onChange,placeholder="Search..."}) { return <label className="search-box"><Search size={16}/><input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder}/></label>; }
export function EmptyState({title,text}) { return <div className="empty-state"><div className="empty-icon"><Plus size={22}/></div><b>{title}</b><p>{text}</p></div>; }
