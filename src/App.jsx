import { profile, projects, experience, education, skills } from './data.js';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import WorkSection from './components/WorkSection.jsx';

export default function App() {
  return <div className="min-h-screen bg-[#f7f6f1] font-['DM_Sans',sans-serif] text-[#1d2824] antialiased">
    <Header email={profile.email}/>
    <main>
      <HeroSection profile={profile}/>
      <WorkSection projects={projects}/>
      <AboutSection education={education}/>
      <ExperienceSection experience={experience}/>
      <SkillsSection skills={skills}/>
      <ContactSection profile={profile}/>
    </main>
    <Footer/>
  </div>;
}
