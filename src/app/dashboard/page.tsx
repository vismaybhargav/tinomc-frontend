export default function DashboardHome() {
    return (new Array(10).fill(0)).map((_item, idx) => <div className="text-9xl" key={idx}>Hello</div>
    );
}
