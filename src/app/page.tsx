import { faker } from "@faker-js/faker";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-center text-7xl">Lorem Ipsum</h1>
      {/* <h1 className="text-center text-5xl sm:text-7xl lg:text-9xl">Lorem Ipsum</h1> */}
      {/* <h1 className="text-center text-[60px]">Lorem Ipsum</h1> */}
      {/* <h1 className="text-center text-[13vw]">Lorem Ipsum</h1> */}
      {/* <h1 className="text-center text-[min(13vw,130px)]">Lorem Ipsum</h1> */}

      <div className="mt-14 columns-2">
        <div>
          <h2 className="text-2xl uppercase italic">
            {faker.lorem.words({ min: 2, max: 2 })}
          </h2>
          <p className="mt-2">{faker.lorem.sentences({ min: 7, max: 15 })}</p>
        </div>
        <div>
          <h2 className="text-2xl uppercase italic mt-4">
            {faker.lorem.words({ min: 2, max: 2 })}
          </h2>
          <p className="mt-2">{faker.lorem.sentences({ min: 7, max: 15 })}</p>
          <p className="mt-2">{faker.lorem.sentences({ min: 7, max: 15 })}</p>
        </div>
        <div>
          <h2 className="text-2xl uppercase italic mt-4">
            {faker.lorem.words({ min: 2, max: 2 })}
          </h2>
          <p className="mt-2">{faker.lorem.sentences({ min: 7, max: 15 })}</p>
        </div>
        <div>
          <h2 className="text-2xl uppercase italic mt-4">
            {faker.lorem.words({ min: 2, max: 2 })}
          </h2>
          <p className="mt-2">{faker.lorem.sentences({ min: 7, max: 15 })}</p>
        </div>
        <div>
          <h2 className="text-2xl uppercase italic mt-4">
            {faker.lorem.words({ min: 2, max: 2 })}
          </h2>
          <p className="mt-2">{faker.lorem.sentences({ min: 7, max: 15 })}</p>
        </div>
      </div>
    </main>
  );
}
