import { Appbar } from "../components/Appbar";
import { useUserProfile } from "../hooks/useUserProfile";

export const Dashboard = () => {
    const { loading, userInfo } = useUserProfile();
    
    const numberOfPosts = 5;
    const posts = new Array(numberOfPosts).fill({
        title: "Sample Post",
        date: "2024-12-16",
    });

    if (loading) {
        return <div className="text-center py-20">Loading...</div>;
    }

    if (!userInfo) {
        return <div className="text-center py-20 text-red-500">Failed to load user information.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Appbar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
           
                <div className="bg-white rounded-lg shadow-lg p-6 mt-12">
                    <h1 className="text-3xl font-bold text-indigo-600 mb-4">User Dashboard</h1>
                    <div className="space-y-3">
                        <div>
                            <span className="font-semibold text-gray-700">Name:</span> {userInfo.name}
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">Email:</span> {userInfo.email}
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">Description:</span> {userInfo.description || "No description provided"}
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">Number of Posts:</span> {numberOfPosts}
                        </div>
                    </div>
                </div>

              
                <div className="bg-white rounded-lg shadow-lg p-6 col-span-1 md:col-span-2 mt-12">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Recent Posts</h2>
                    <div className="space-y-4">
                        {posts.map((post, index) => (
                            <div key={index} className="border-b pb-4">
                                <h3 className="font-semibold text-lg text-gray-800">{post.title}</h3>
                                <p className="text-sm text-gray-500">{post.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
              
            </div>
        </div>
    );
};