import signupbg from "../assets/secure.jpg"
// Quote.tsx
export const Quote = () => {
  
};

export const Quota = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center "
            style={{
          backgroundImage: `url(${signupbg})`,
        }}>
      <Quote />
    </div>
  );
};
