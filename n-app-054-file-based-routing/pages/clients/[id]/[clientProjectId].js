import { useRouter } from "next/router";

const ClientProject = () => {
	const router = useRouter();

	return (
		<div>
			<h1>Specific Project for a Selected Client</h1>
			<h2>{router.query.clientProjectId}</h2>
			<pre>{JSON.stringify(router.query)}</pre>
		</div>
	);
};

export default ClientProject;
