import { useState } from 'react';
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamSection = () => {
  const [activeTeam, setActiveTeam] = useState<'leadership' | 'marketing' | 'developers'>('leadership');
  
  // Team Data
  const leadership = [
    {
        name: "Sumiit Nautiyal",
        role: "Chief Executive Officer",
        bio: "Having the experience in the marketing and sales segment, You can not win him if the argument starts so just bow down and wait till he comes to make it up by his fantastic hospitality in charge.",
        avatar: "https://res.cloudinary.com/dna3hwzre/image/upload/v1744588507/479499552_18050220845128383_4627433091083380717_n_dck1kx.jpg" // Replace with actual image URL
      },
      {
        name: "Ashwani Kaushik",
        role: "Chief Technical Officer",
        bio: "He enjoys merging his knowledge of computer science and computer engineering to explore the limits of technology. Always eager for a challenge, he seeks creative solutions, regardless of the problem size. Often found in the cafeteria, sipping tea and showcasing his cooking skills. Just a heads-up: if you join him, be prepared for some delicious food—it might be hard to resist second helpings!",
        avatar: "https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/473412855_993376778862353_2441851371015594477_n.jpg?ccb=11-4&oh=01_Q5Aa1QEYDtjNOi4YqkbM1hcfYUYLPx1G-kyooDEudQwqGMvA3Q&oe=68055C7D&_nc_sid=5e03e0&_nc_cat=102"
      },
    {
      name: "Aryan Singh",
      role: "Chief Financial Officer",
      bio: "Managing finances isn't just about having the know-how; it's all about the experience! Our CFO has a cool mix of insights from literature, law, and even an MBA, which makes him really well-rounded. You'll usually catch him chilling on a bean bag, totally up for a casual chat. He's definitely someone you can count upon!",
      avatar: "https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/487021445_1301418911161492_1432720301756424006_n.jpg?ccb=11-4&oh=01_Q5Aa1QFzZBpkDR8GGBrnSrn0aG7CrJ7FUiwsskYya4E_HTNp_Q&oe=68065005&_nc_sid=5e03e0&_nc_cat=111" // Replace with actual image URL
    },
   
  ];
  
  const marketing = [
    {
      name: "Hardika Jain",
      role: "Marketing Manager",
      bio: "Confidence from the skills of journalism and exposure and experience as being in the social media as well as online marketing segment, She got it covered.",
      avatar: "https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/473399856_509798688455328_4353400778840148729_n.jpg?ccb=11-4&oh=01_Q5AaIbAeJ0DlsKf6vOdKoIO7lMDMu6uZXIy44gEEbjhL2c7I&oe=68050F1D&_nc_sid=5e03e0&_nc_cat=111"
    },
    {
      name: "Dishant Bisht",
      role: "Design Manager",
      bio: "The Bubbly one, Who can never let you frown, Laughing till your stomach hurts like hell that's him for you, Just like how he takes his work in a super chill manner and manages to create fantastic designs with his hard work!",
      avatar: "https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/473405896_614744644508417_3514213680300761653_n.jpg?ccb=11-4&oh=01_Q5Aa1QE3VRTQMu7cB08hWDIUiErp3ccudFLT4d0ccGHH9tSl6g&oe=68096014&_nc_sid=5e03e0&_nc_cat=102"
    }
  ];
  
  const developers = [
    {
      name: "Saurav Anand",
      role: "Software Developer",
      bio: "Hailing from the prestigious IIT Patna, he is dedicated to making anything and everything you request a reality! Driven by a passion for software development and technology solutions, you'll often find him at his desk, fully focused on his work. But when the weekend rolls around, he's always up for a friendly cricket or badminton match—bring it on!",
      avatar: "https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/483267165_1291133648647558_9064138211975758269_n.jpg?ccb=11-4&oh=01_Q5Aa1QFFSJrAqK-Xm4aToGAtWXsSV1cJ7t8ldwgQWHpU1Qk2Cg&oe=68067BD6&_nc_sid=5e03e0&_nc_cat=103"
    },
    {
      name: "Kanishkk",
      role: "Software Developer",
      bio: "Package of Talent, Skills and Wonderful Attributes. He got it Covered! A coffee lover and a serious muncher presenting you our wonderful developer!",
      avatar: "https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/485476486_972240091707369_7965139340674000850_n.jpg?ccb=11-4&oh=01_Q5AaIRcnoyDo80dBhdiymNujW-SSRAz4ogJdnAAQ-ZDjJK-V&oe=6805160E&_nc_sid=5e03e0&_nc_cat=106"
    }
  ];

  const renderTeamMembers = (members: any[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <Card 
            key={index} 
            className="group mt-10 relative h-[400px] overflow-hidden transition-all duration-500 hover:shadow-2xl bg-gray-800/50 backdrop-blur-sm"
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-center p-6">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <CardDescription className="text-gray-200 text-center text-sm leading-relaxed overflow-y-auto max-h-full scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-600">
                  {member.bio}
                </CardDescription>
              </div>
            </div>

            <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <Avatar className="h-32 w-32 border-4 border-white/20 shadow-2xl mx-auto">
                  {member.avatar.startsWith('http') ? (
                    <AvatarImage 
                      src={member.avatar}
                      className="object-cover"
                    />
                  ) : (
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-3xl font-bold">
                      {member.avatar}
                    </AvatarFallback>
                  )}
                </Avatar>
              </div>
              <span className="text-2xl font-bold text-gray-100">{member.name}</span>
              <span className="text-blue-400 font-medium mt-2">{member.role}</span>
            </CardContent>

            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        ))}
      </div>
    );
  };

  return (
    <section id="team" className="md:py-24 py-10 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Team
          </span>
          <span className="text-lg text-gray-400 mb-8">
            Meet the brilliant minds powering AAS Technology's innovation
          </span>
          </div>
          
          {/* Team Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['leadership', 'marketing', 'developers'].map((team) => (
              <button
                key={team}
                onClick={() => setActiveTeam(team as any)}
                className={`px-6 py-3 rounded-full transition-all font-medium ${
                  activeTeam === team
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {team.charAt(0).toUpperCase() + team.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Team Content Sections */}
        <div className="space-y-16">
          {activeTeam === 'leadership' && (
            <div className="animate-fade-in text-center">
              <span className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Visionary Leadership
              </span>
              {renderTeamMembers(leadership)}
            </div>
          )}

          {activeTeam === 'marketing' && (
            <div className="animate-fade-in text-center">
              <span className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Creative Marketing
              </span>
              {renderTeamMembers(marketing)}
            </div>
          )}

          {activeTeam === 'developers' && (
            <div className="animate-fade-in text-center">
              <span className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Technical Excellence
              </span>
              {renderTeamMembers(developers)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;