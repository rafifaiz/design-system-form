import { RegisterForm } from "./components/organisms/RegisterForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="container mx-auto">
        <RegisterForm />
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Made with React + TypeScript + Tailwind CSS</p>
          <p>React Hook Form + Zod Validation</p>
        </div>
      </div>
    </div>
  );
}

export default App;