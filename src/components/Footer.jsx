import React from 'react';

function Footer({ version }) {
	return (
		<footer className="p-4">
			<div className="container text-center dark:text-white">
				@ Hennadii Lapko, 2020 - present, v.{version}
			</div>
		</footer>
	);
}

export default Footer;
