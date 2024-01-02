import Header from "./components/header";
import "./styles/main.css";
import ProfileSection from "./components/profile";
import WorkTab from "./components/worktab";
import EductionSection from "./components/education";

export default function App() {
  return (
    <div className="container">
      <Header></Header>
      <ProfileSection></ProfileSection>
      <div className="experience">
      <WorkTab></WorkTab>
      <EductionSection></EductionSection>
      </div>
    </div>
  );
}
