import Card from "@/components/shared/Card";
import Hero from "../_components/Hero";
import jpg from "@/public/assets/carousel1.jpg";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1 sm: grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6 px-6">
        <Card
          description="Hello world"
          imageUrl="/assets/carousel.jpg"
          title="My Card"
        />
        {/* <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        />
        <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        />
        <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        />
        <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        />
        <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        />
        <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        />
        <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        />
        <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        />
        <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        />
        <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        />
        <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        />
        <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        />
        <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        />
        <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        />
        <Card
          description="Hello world"
          imageUrl="https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          title="My Card"
        /> */}
      </div>
    </div>
  );
}
