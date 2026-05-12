import ProfileCard from "./components/ProfileCard";
export default function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100"> {/* EDIT: bg-gray-100 is the page background color */}
      <ProfileCard
        name="AayushaDemo" 
        role="Frontend Intern" 
      />
    </div>
  );
}