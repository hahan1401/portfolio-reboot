'use client';

import { CSSProperties } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Bag } from '../ui/icons';

const Exprerience = ({ style }: { style?: CSSProperties }) => {
	return (
		<div
			className='card'
			style={style}
		>
			<p className='card-header'>Exprerience</p>
			<VerticalTimeline
				layout='1-column-left'
				lineColor='rgb(var(--text-link))'
			>
				<VerticalTimelineElement
					visible={true}
					className='vertical-timeline-element--work'
					contentStyle={{ background: 'rgb(var(--text-link))', color: '#fff' }}
					contentArrowStyle={{ borderRight: '8px solid  rgb(var(--text-link))' }}
					date='04/2022 - present'
					iconStyle={{ background: 'rgb(var(--text-link))', color: '#fff' }}
					icon={<Bag />}
				>
					<p className='vertical-timeline-element-title m-0!'>Bluebottle Digital Vietnam</p>
					<h4 className='vertical-timeline-element-subtitle'>Hanoi, Vietnam</h4>
					<p className='font-normal! md:text-sm!'>
						A boutique digital developer, helping to design, develop and manage innovative web & mobile solutions
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default Exprerience;
