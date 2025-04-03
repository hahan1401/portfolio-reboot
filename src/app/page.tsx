'use client'

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

export default function Home() {
  return (
   <div><VerticalTimeline
   layout='1-column-left'
   lineColor='rgb(var(--text-link))'
 >
   <VerticalTimelineElement
     visible={true}
     className='vertical-timeline-element--work'
     contentStyle={{ background: 'rgb(var(--text-link))', color: '#fff' }}
     contentArrowStyle={{ borderRight: '8px solid  rgb(var(--text-link))' }}
     date='03/2021'
     iconStyle={{ background: 'rgb(var(--text-link))', color: '#fff' }}
     icon={<div>1231</div>}
   >
     <p className='vertical-timeline-element-title !m-0'>IELTS Score: 5.5</p>
   </VerticalTimelineElement>
   <VerticalTimelineElement
     visible={true}
     className='vertical-timeline-element--work'
     contentStyle={{ background: 'rgb(var(--text-link))', color: '#fff' }}
     contentArrowStyle={{ borderRight: '8px solid  rgb(var(--text-link))' }}
     date='08/2020'
     iconStyle={{ background: 'rgb(var(--text-link))', color: '#fff' }}
     icon={<div>1231</div>}
   >
     <p className='vertical-timeline-element-title !m-0'>Pasal Pro-Speaking</p>
   </VerticalTimelineElement>
 </VerticalTimeline></div>
  );
}
