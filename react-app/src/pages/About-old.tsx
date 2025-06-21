import { useState } from 'react';
import { Avatar, Button } from '@mui/material';

function About() {
  const [activeSection, setActiveSection] = useState<'interest' | 'hobbies' | null>(null);

  const handleToggle = (section: 'interest' | 'hobbies') => {
    setActiveSection(prev => (prev === section ? null : section));
  };

  return (<>
    <div className="w-[80%] h-screen mt-10 mx-auto">
        <div className='flex justify-around bg-[#fff6f6] p-10 rounded-[2em]'>
          <div className="flex flex-col items-center">
            Profile
            <Avatar className="justify-center" alt="Darlene" src="src/assets/profile.jpg" sx={{ width: 200, height: 200 }} />  

            {/* Tombol Toggle */}
            <div className="gap-4">
              <Button
                variant={activeSection === 'interest' ? 'contained' : 'outlined'}
                onClick={() => handleToggle('interest')}
              >
                Interest
              </Button>
              <Button
                variant={activeSection === 'hobbies' ? 'contained' : 'outlined'}
                onClick={() => handleToggle('hobbies')}
              >
                Hobbies
              </Button>
            </div>

            {/* Konten di bawah tombol */}
            <div className="mt-4 text-center">
              {activeSection === 'interest' && (
                <div>🌟 UI/UX Design, Web Dev, Branding</div>
              )}
              {activeSection === 'hobbies' && (
                <div>🎨 Drawing, 🎮 Gaming, 📚 Reading</div>
              )}
            </div>

            <div className='align-self-end'>
              <Button>Quit</Button>
              <Button>Skills</Button>
              <Button>Experience</Button>
            </div>

          </div>


          <div className='w-2/3'>
            <h2 className='press_start'>About Me</h2>
            <p className='text-[#b96a34] pixelify text-left'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias dignissimos illo blanditiis enim! Odit, numquam eum officiis nesciunt est explicabo hic corporis ut at ipsam quisquam aliquam eos vero! Fugiat sit maxime voluptas vel cupiditate officia consequatur quo illo modi perspiciatis, recusandae ex, animi minus et impedit. Aspernatur repellat, incidunt odit amet ea totam reiciendis voluptas asperiores eaque impedit omnis iusto a. Ad sit iusto aperiam id esse similique voluptatum, magni deleniti laudantium eveniet ipsa commodi, velit tempora. Sint repudiandae iusto nisi, perspiciatis exercitationem doloremque recusandae, eum beatae porro impedit nulla, itaque ipsum odit magni fugiat quidem facilis quis ratione ipsam! Libero tenetur ullam enim sed. Blanditiis architecto similique magnam! Consequatur distinctio dignissimos, iure a at illum ipsam ex, culpa autem voluptatem corporis ipsa expedita odit corrupti ut neque quis laudantium cupiditate iusto et veritatis laboriosam beatae eveniet illo? Nisi dolorem facilis veritatis nostrum fuga quidem quae, rem laudantium tenetur porro doloremque eveniet minus. Quos aut sit ut reprehenderit distinctio non minima autem ullam nulla, iure enim voluptate. Nobis, aspernatur odit qui deleniti hic rerum at deserunt saepe repellendus molestiae illo non cumque dicta laudantium iste suscipit doloremque, aperiam quibusdam repudiandae facere molestias numquam? Impedit sint rerum dolor ipsum velit.
            </p>  
          </div>
        </div>
        <div className="flex">
        
        </div>

    </div>
  </>);
}

export default About;
