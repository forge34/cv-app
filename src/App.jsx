import Header from "./components/header";
import "./styles/main.css";
import ProfileSection from "./components/profile";

export default function App() {
  return (
    <div className="container">
      <Header></Header>
      <ProfileSection></ProfileSection>
    </div>
  );
}
