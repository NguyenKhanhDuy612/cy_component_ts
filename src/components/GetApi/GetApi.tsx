import React, { useEffect, useState } from 'react';

interface DataItem {
	id: number;
	name: string;
}

const GetApi: React.FC = () => {
	const [data, setData] = useState<DataItem[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
		try {
			const response = await fetch('http://localhost:3005/account');
			if (!response.ok) throw new Error('Network response was not ok');
			const result = await response.json();
			setData(result);
		} catch (error) {
			setError((error as Error).message);
		} finally {
			setLoading(false);
		}
		};

		fetchData();
	}, []);

	if (loading) return <div className="loading-spinner">Loading...</div>;
	if (error) return <div className="error-message">{error}</div>;

	return (
		<div>
		{data.map(item => (
			<div key={item.id} className="data-item">
			{item.name}
			</div>
		))}
		</div>
	);
};

export default GetApi;
