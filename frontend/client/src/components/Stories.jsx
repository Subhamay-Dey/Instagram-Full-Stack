import React from 'react';

const Stories = () => {
  const storiesData = [
    { id: 1, username: 'user1', image: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=User1' },
    { id: 2, username: 'user2', image: 'https://via.placeholder.com/150/FFC300/FFFFFF?text=User2' },
    { id: 3, username: 'user3', image: 'https://via.placeholder.com/150/C70039/FFFFFF?text=User3' },
    { id: 4, username: 'user4', image: 'https://via.placeholder.com/150/900C3F/FFFFFF?text=User4' },
    { id: 5, username: 'user5', image: 'https://via.placeholder.com/150/581845/FFFFFF?text=User5' },
    { id: 6, username: 'user6', image: 'https://via.placeholder.com/150/581845/FFFFFF?text=User5' },
    { id: 7, username: 'user7', image: 'https://via.placeholder.com/150/581845/FFFFFF?text=User5' },
    { id: 8, username: 'user8', image: 'https://via.placeholder.com/150/581845/FFFFFF?text=User5' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 select-none">
      <div className="flex overflow-x-auto space-x-5 ml-[120px]">
        {storiesData.map((story) => (
          <div key={story.id} className="flex-shrink-0 w-[80px] h-[80px] relative rounded-full overflow-hidden">
            <img className="object-cover w-full h-full" src={story.image} alt="Story" />
            <div className="absolute bottom-0 left-0 w-full p-2 text-white text-center">
              <span className="font-semibold">{story.username}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;