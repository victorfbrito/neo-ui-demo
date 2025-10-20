import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Search, { type SearchOption } from "../components/Search";

const SEARCH_RESULTS: SearchOption[] = [
  { label: "Ada Lovelace", value: "ada", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "Alan Turing", value: "turing" },
  { label: "Grace Hopper", value: "hopper", image: "https://images.unsplash.com/photo-1545184180-25d471fe75d8?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "Edsger Dijkstra", value: "dijkstra" },
  { label: "Barbara Liskov", value: "liskov" },
  { label: "Donald Knuth", value: "knuth" },
  { label: "Margaret Hamilton", value: "hamilton", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "John von Neumann", value: "neumann" },
  { label: "Claude Shannon", value: "shannon" },
  { label: "Tim Berners-Lee", value: "berners-lee", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "Linus Torvalds", value: "torvalds" },
  { label: "Guido van Rossum", value: "rossum", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "Brendan Eich", value: "eich" },
  { label: "Yukihiro Matsumoto", value: "matsumoto" },
  { label: "James Gosling", value: "gosling" },
  { label: "Bjarne Stroustrup", value: "stroustrup" },
  { label: "Dennis Ritchie", value: "ritchie" },
  { label: "Ken Thompson", value: "thompson" },
  { label: "Brian Kernighan", value: "kernighan" },
  { label: "Richard Stallman", value: "stallman" },
  { label: "Eric Raymond", value: "raymond" },
  { label: "Andrew Tanenbaum", value: "tanenbaum" },
  { label: "Vint Cerf", value: "cerf" },
  { label: "Bob Kahn", value: "kahn" },
  { label: "Douglas Engelbart", value: "engelbart" },
  { label: "Ivan Sutherland", value: "sutherland" },
  { label: "Marvin Minsky", value: "minsky" },
  { label: "John McCarthy", value: "mccarthy" },
  { label: "Herbert Simon", value: "simon" },
  { label: "Allen Newell", value: "newell" },
  { label: "Norbert Wiener", value: "wiener" },
  { label: "Claude Elwood Shannon", value: "shannon-claude" },
  { label: "George Boole", value: "boole" },
  { label: "Augusta Ada King", value: "ada-king" },
  { label: "Charles Babbage", value: "babbage" },
  { label: "Herman Hollerith", value: "hollerith" },
  { label: "Konrad Zuse", value: "zuse" },
  { label: "Tommy Flowers", value: "flowers" },
  { label: "Max Newman", value: "newman" },
  { label: "Jack Kilby", value: "kilby" },
  { label: "Robert Noyce", value: "noyce" },
  { label: "Gordon Moore", value: "moore" },
  { label: "Andy Grove", value: "grove" },
  { label: "Steve Jobs", value: "jobs", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "Steve Wozniak", value: "wozniak" },
  { label: "Bill Gates", value: "gates", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "Paul Allen", value: "allen" },
  { label: "Larry Page", value: "page" },
  { label: "Sergey Brin", value: "brin" },
  { label: "Jeff Bezos", value: "bezos" },
  { label: "Elon Musk", value: "musk", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "Mark Zuckerberg", value: "zuckerberg" },
  { label: "Satya Nadella", value: "nadella" },
  { label: "Sundar Pichai", value: "pichai" },
  { label: "Jensen Huang", value: "huang" },
  { label: "Lisa Su", value: "su" },
  { label: "Pat Gelsinger", value: "gelsinger" },
  { label: "Jensen Huang", value: "huang-jensen" },
  { label: "Susan Wojcicki", value: "wojcicki" },
  { label: "Sheryl Sandberg", value: "sandberg" },
  { label: "Marissa Mayer", value: "mayer" },
  { label: "Ginni Rometty", value: "rometty" },
  { label: "Meg Whitman", value: "whitman" },
  { label: "Carly Fiorina", value: "fiorina" },
  { label: "Mary Barra", value: "barra" },
  { label: "Indra Nooyi", value: "nooyi" },
  { label: "Ursula Burns", value: "burns" },
  { label: "Ginni Rometty", value: "rometty-ginni" },
  { label: "Virginia Rometty", value: "rometty-virginia" },
  { label: "Rosalind Picard", value: "picard" },
  { label: "Fei-Fei Li", value: "li" },
  { label: "Yann LeCun", value: "lecun" },
  { label: "Geoffrey Hinton", value: "hinton" },
  { label: "Yoshua Bengio", value: "bengio" },
  { label: "Andrew Ng", value: "ng" },
  { label: "Demis Hassabis", value: "hassabis" },
  { label: "Mustafa Suleyman", value: "suleyman" },
  { label: "Shane Legg", value: "legg" },
  { label: "Oriol Vinyals", value: "vinyals" },
  { label: "Quoc Le", value: "le" },
  { label: "Jeff Dean", value: "dean" },
  { label: "Sanjay Ghemawat", value: "ghemawat" },
  { label: "Luiz André Barroso", value: "barroso" },
  { label: "Urs Hölzle", value: "holzle" },
  { label: "Eric Schmidt", value: "schmidt" },
  { label: "Jonathan Rosenberg", value: "rosenberg" },
  { label: "Alan Eustace", value: "eustace" },
  { label: "David Drummond", value: "drummond" },
  { label: "Kent Walker", value: "walker" },
  { label: "Ruth Porat", value: "porat" },
  { label: "Patrick Pichette", value: "pichette" },
  { label: "Larry Page", value: "page-larry" },
  { label: "Sergey Brin", value: "brin-sergey" },
  { label: "Eric Schmidt", value: "schmidt-eric" },
  { label: "Jonathan Rosenberg", value: "rosenberg-jonathan" },
  { label: "Alan Eustace", value: "eustace-alan" },
  { label: "David Drummond", value: "drummond-david" },
  { label: "Kent Walker", value: "walker-kent" },
  { label: "Ruth Porat", value: "porat-ruth" },
  { label: "Patrick Pichette", value: "pichette-patrick" }
];

const meta: Meta<typeof Search> = {
  title: "Components/Search",
  component: Search,
  args: {
    options: SEARCH_RESULTS,
    selectedOption: null,
    disabled: false,
    maxHeight: 180,
    searchDelay: 300
  }
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<SearchOption | string | null>(args.selectedOption);
    const [results, setResults] = React.useState<SearchOption[]>([]);
    const [isSearching, setIsSearching] = React.useState(false);

    const handleSearch = React.useCallback((query: string) => {
      if (query.trim()) {
        setIsSearching(true);
        // Simulate API call delay
        setTimeout(() => {
          const filtered = SEARCH_RESULTS.filter(item => 
            item.label.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filtered);
          setIsSearching(false);
        }, 500);
      } else {
        setResults([]);
        setIsSearching(false);
      }
    }, []);

    return (
      <div className="max-w-md">
        <Search 
          {...args} 
          options={isSearching ? [] : results}
          selectedOption={value} 
          onSelect={setValue}
          onSearch={handleSearch}
        />
        <div className="mt-3 text-xs text-[var(--muted-fg)]">
          Selected: {typeof value === "string" ? value : value?.label ?? "none"}
        </div>
        {isSearching && (
          <div className="mt-2 text-xs text-[var(--muted-fg)]">
            🔍 Searching...
          </div>
        )}
      </div>
    );
  }
};

export const WithCustomDelay: Story = {
  args: {
    searchDelay: 1000
  },
  render: (args) => {
    const [value, setValue] = React.useState<SearchOption | string | null>(null);
    const [results, setResults] = React.useState<SearchOption[]>([]);
    const [searchCount, setSearchCount] = React.useState(0);

    const handleSearch = React.useCallback((query: string) => {
      setSearchCount(prev => prev + 1);
      if (query.trim()) {
        const filtered = SEARCH_RESULTS.filter(item => 
          item.label.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      } else {
        setResults([]);
      }
    }, []);

    return (
      <div className="max-w-md">
        <Search 
          {...args} 
          options={results}
          selectedOption={value} 
          onSelect={setValue}
          onSearch={handleSearch}
        />
        <div className="mt-3 text-xs text-[var(--muted-fg)]">
          Search calls made: {searchCount} (1 second delay)
        </div>
      </div>
    );
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: SEARCH_RESULTS
  }
};
