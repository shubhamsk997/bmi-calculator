import { site } from "@/lib/site";
export function JsonLd({data}:{data:Record<string,unknown>|Record<string,unknown>[]}) { return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/> }
export const organizationSchema={"@context":"https://schema.org","@type":"Organization",name:site.name,url:site.url,description:site.description};
export const websiteSchema={"@context":"https://schema.org","@type":"WebSite",name:site.name,url:site.url,potentialAction:{"@type":"SearchAction",target:`${site.url}/bmi-calculator?query={search_term_string}`,"query-input":"required name=search_term_string"}};
export function breadcrumb(items:{name:string;path:string}[]){return {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:items.map((x,i)=>({"@type":"ListItem",position:i+1,name:x.name,item:`${site.url}${x.path}`}))}}
