/**
 * Node modules
 */
import { Icon } from "@/components/ui/icon";
import { BusAndShuttleForm } from "@/components/bus-and-shuttle-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="mt-24 text-center">
        <h1 className="text-foreground text-4xl font-semibold">
          Travel Smarter, Not Harder
        </h1>
        <p className="text-foreground-secondary mt-2">
          Make every trip effortless. Tripzy lets you book rides and plan
          journeys with ease
        </p>
      </div>
      <div className="shadow-level-3 bg-background w-full max-w-6xl rounded-xl pb-6">
        <Tabs defaultValue="bus-and-shuttle" className="space-y-6">
          <div className="shadow-level-2 rounded-xl p-2">
            <TabsList>
              <TabsTrigger
                value="bus-and-shuttle"
                className="data-[state=active]:bg-primary-light hover:bg-primary-light"
              >
                <span className="bg-primary-dark rounded-full p-3">
                  <Icon name="bus" className="text-primary" />
                </span>
                Bus & Shuttle
              </TabsTrigger>
              <TabsTrigger
                value="hotel-and-accommodation"
                className="data-[state=active]:bg-secondary-light hover:bg-secondary-light"
              >
                <span className="bg-secondary rounded-full p-3">
                  <Icon name="hotel" className="text-secondary-dark" />
                </span>
                Hotel & Accommodation
              </TabsTrigger>
              <TabsTrigger
                value="flight"
                className="data-[state=active]:bg-tertiary-light hover:bg-tertiary-light"
              >
                <span className="bg-tertiary rounded-full p-3">
                  <Icon name="plane" className="text-tertiary-dark" />
                </span>
                Flight
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="min-h-52">
            <TabsContent value="bus-and-shuttle">
              <BusAndShuttleForm />
            </TabsContent>
            <TabsContent value="hotel-and-accommodation">
              <p className="text-foreground-secondary text-center">No Data</p>
            </TabsContent>
            <TabsContent value="flight">
              <p className="text-foreground-secondary text-center">No Data</p>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default HomePage;
