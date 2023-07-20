import { useRouter } from "next/router";

const PortfolioProject = () => {
	const router = useRouter();
	return (
		<div>
			<h1>Portfolio Project</h1>
			<h2>{router.query.projectId}</h2>
		</div>
	);
};

export default PortfolioProject;
