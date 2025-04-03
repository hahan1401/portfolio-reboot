import { CSSProperties } from 'react';

const Projects = ({ style }: { style?: CSSProperties }) => {
	return (
		<div
			className='card mt-4'
			style={style}
		>
			<p className='card-header'>Projects</p>
			<div className='border-l-2 border-link pl-3'>
				<div>
					<p className='font-bold'>Fandelo Cms</p>
					<ul>
						<li>Description: Web app to manage content for Fandelo native app, manage users</li>
						<li>Role: Frontend Developer</li>
						<li>Technology used: HTML, CSS, Tailwindcss, NextAuth, Nextjs, Hellosign, Xero, Socket, ...</li>
						<li>Number of members: 10 - 20</li>
						<li>
							Responsibilities:{' '}
							<ul className='border-l-2 border-primary-300 pl-2'>
								<li>Create app base on Nextjs</li>
								<li>Contribute to first base Frontend stuff, layout, styling</li>
								<li>
									Research the latest technologies to use for the project, solutions that optimize performance and user
									experience
								</li>
							</ul>
						</li>
					</ul>
				</div>

				<div className='border-primary/20 mt-3 border-t pt-1'>
					<p className='font-bold'>Believe Tasmanian</p>
					<ul>
						<li>
							Description: Landing page for an organization that inspire and support young women and men to play in the
							Tassie jumper in Hobart, TAS, Australia, Tasmania
						</li>
						<li>Role: Frontend Developer</li>
						<li>Technology used: Nextjs, HTML, CSS, Tailwindcss, ...</li>
						<li>Number of members: 10 - 15</li>
						<li>
							Responsibilities:{' '}
							<ul className='border-l-2 border-primary-300 pl-2'>
								<li>Init, create base components, develop.</li>
								<li>
									Research the latest technologies to use for the project, solutions that optimize performance and user
									experience.
								</li>
								<li>SEO optimization.</li>
							</ul>
						</li>
					</ul>
				</div>

				<div className='border-primary/20 mt-3 border-t pt-1'>
					<p className='font-bold'>Fandelo landing page</p>
					<ul>
						<li>Description: Landing page for launch campain Fandelo app</li>
						<li>Role: Frontend Developer</li>
						<li>Technology used: Nextjs, HTML, CSS, Tailwindcss, Frame motion, ...</li>
						<li>Number of members: 2-5</li>
						<li>
							Responsibilities:{' '}
							<ul className='border-l-2 border-primary-300 pl-2'>
								<li>
									Research the latest technologies to use for the project, solutions that optimize performance and user
									experience.
								</li>
								<li>SEO optimization.</li>
							</ul>
						</li>
					</ul>
				</div>

				<div className='border-primary/20 mt-3 border-t pt-1'>
					<p className='font-bold'>Prism admin</p>
					<ul>
						<li>
							Description: Manage and connect organizations and individuals providing and using services for horse
							racing
						</li>
						<li>Role: Frontend Developer</li>
						<li>Technology used: Angular, Hellosign, Xero, bootstrap, ...</li>
						<li>Number of members: 2-5</li>
						<li>
							Responsibilities:{' '}
							<ul className='border-l-2 border-primary-300 pl-2'>
								<li>Integration with backend, 3rd party</li>
								<li>
									Research the latest technologies to use for the project, solutions that optimize performance and user
									experience.
								</li>
							</ul>
						</li>
					</ul>
				</div>

				<div className='border-primary/20 mt-3 border-t pt-1'>
					<p className='font-bold'>Prism Trainer Website</p>
					<ul>
						<li>Description: Personal websites for Prism users</li>
						<li>Role: Frontend Developer</li>
						<li>Technology used: HTML, CSS, Reactjs, Nextjs, Ant design, Boostrap, Tailwindcss, Charka ui, ...</li>
						<li>Number of members: 10 - 20</li>
						<li>
							Responsibilities:{' '}
							<ul className='border-l-2 border-primary-300 pl-2'>
								<li>Do all the Frontend stuffs, layout, styling</li>
								<li>
									Research the latest technologies to use for the project, solutions that optimize performance and user
									experience.
								</li>
								<li>SEO optimization</li>
							</ul>
						</li>
					</ul>
				</div>

				<div className='border-primary/20 mt-3 border-t pt-1'>
					<p className='font-bold'>Prism Trainer Website</p>
					<ul>
						<li>Description: Personal websites for Prism users</li>
						<li>Role: Frontend Developer</li>
						<li>Technology used: HTML, CSS, Reactjs, Nextjs, Ant design, Boostrap, Tailwindcss, Charka ui, ...</li>
						<li>Number of members: 10 - 20</li>
						<li>
							Responsibilities:{' '}
							<ul className='border-l-2 border-primary-300 pl-2'>
								<li>Do all the Frontend stuffs, layout, styling</li>
								<li>
									Research the latest technologies to use for the project, solutions that optimize performance and user
									experience.
								</li>
								<li>SEO optimization</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Projects;
