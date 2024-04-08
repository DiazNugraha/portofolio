import { BackgroundGradient } from "../ui/background-gradient";

export default function Profile() {
  return (
    <div className="flex gap-10 flex-col md:flex-row p-10">
      <div className="flex-1 flex items-center justify-center">
        <BackgroundGradient>
          <div className="rounded-3xl w-[200px] h-[300px] md:w-[473px] md:h-[605px] bg-slate-300/60"></div>
        </BackgroundGradient>
      </div>
      <div className="w-full flex-1 flex items-center justify-start">
        <p className="text-white text-[12px] md:text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          accusantium dolor id molestiae? A amet laudantium reiciendis culpa?
          Voluptatem, nesciunt iure. Obcaecati itaque architecto, eius dolores
          tempora molestias sit? Adipisci maiores sunt voluptatem, consequuntur
          dicta ratione, ad facilis sit, rem error veniam earum voluptatum
          debitis distinctio at explicabo mollitia iste.
        </p>
      </div>
    </div>
  );
}
