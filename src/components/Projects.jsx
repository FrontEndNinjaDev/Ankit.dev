// import React, { useState, useEffect } from 'react';

// const Projects = ({ username }) => {

//   const [profile , setProfile ] = useState(null)
//   const [ repos , setRepos ] = useState([])
//   const [loading , setLoading ] = useState(true) 
//   const [ error , setError ] = useState(null) 
//   useEffect(()=>{
//     const fetchGitHubData = async () =>{
//       try{
//         const profileResponse = await fetch(`https://api.github.com/users/${username}`)
//         if(!profileResponse.ok) throw new Error('failed to fetch profile data')
//         const profileData  = await profileResponse.json()

//         const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`)
//         if(!reposResponse.ok) throw new Error('failed to fetch repositories');
//         const reposData = await reposResponse.json()

//         setProfile(profileData);
//         setRepos(reposData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGitHubData();
//   }, [username]);

//   if (loading) return <p className="text-center">Loading...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

    
//   return (
//     <div className="max-w-2xl mx-auto p-4 dark:bg-gray-800 rounded-lg shadow-md bg-custom-blue">
//       {profile && (
//         <div className="flex items-center space-x-4 mb-6">
//           <img
//             src={profile.avatar_url}
//             alt="Profile Avatar"
//             className="w-20 h-20 rounded-full border-2 border-blue-500"
//           />
//           <div>
//             <h2 className="text-2xl font-bold dark:text-white">{profile.name || profile.login}</h2>
//             <p className="text-gray-600 dark:text-gray-400">@{profile.login}</p>
//             <p className="text-gray-700 dark:text-gray-300">{profile.bio}</p>
//           </div>
//         </div>
//       )}

//       <h3 className="text-xl font-semibold mb-3 dark:text-white">Repositories</h3>
//       <ul className="space-y-2">
//         {repos.map((repo) => (
//           <li key={repo.id} className="p-3 bg-white dark:bg-gray-700 rounded-md shadow-sm">
//             <a
//               href={repo.html_url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 dark:text-blue-400 font-medium hover:underline"
//             >
//               {repo.name}
//             </a>
//             <p className="text-sm text-gray-600 dark:text-gray-400">{repo.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Projects;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = ({ username }) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const profileResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!profileResponse.ok) throw new Error('Failed to fetch profile data');
        const profileData = await profileResponse.json();

        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();

        setProfile(profileData);
        setRepos(reposData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 ">
      {/* Profile Section */}
      <motion.div
        className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {profile && (
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={profile.avatar_url}
              alt="Profile Avatar"
              className="w-20 h-20 rounded-full border-2 border-blue-500"
            />
            <div>
              <h2 className="text-2xl font-bold dark:text-white">{profile.name || profile.login}</h2>
              <p className="text-gray-600 dark:text-gray-400">@{profile.login}</p>
              <p className="text-gray-700 dark:text-gray-300">{profile.bio}</p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Repositories Section */}
      <motion.div
        className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-3 dark:text-white">Repositories</h3>
        <ul className="space-y-2">
          {repos.map((repo) => (
            <motion.li
              key={repo.id}
              className="p-3 bg-white dark:bg-gray-700 rounded-md shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 font-medium hover:underline"
              >
                {repo.name}
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400">{repo.description}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Projects;
