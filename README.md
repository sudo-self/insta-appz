# <a href="https://insta-appz.vercel.app">insta-appz</a><br>

<img width="1440" alt="Screenshot 2025-04-12 at 02 11 45" src="https://github.com/user-attachments/assets/d68a8ec7-01f0-4c9f-bff3-0c48a596a57a" />

<img width="1294" alt="Screenshot 2025-04-12 at 01 48 10" src="https://github.com/user-attachments/assets/5ccceb3d-06cf-4601-97b2-2af81043651d" />

### env

<code>
PGHOST_UNPOOLED=your-pghost-unpooled<br>
POSTGRES_URL_NO_SSL=your-postgres-url-no-ssl<br>
PGUSER=your-pguser<br>
POSTGRES_PASSWORD=your-postgres-password<br>
POSTGRES_DATABASE=your-postgres-database<br>
POSTGRES_URL_NON_POOLING=your-postgres-url-non-pooling<br>
GOOGLE_AI_API_KEY=your-google-ai-api-key<br>
</code>


### Api Request

```bash
curl -X POST https://insta-appz.vercel.app/api/generateCode \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gemini-1.5-pro",
    "messages": [
      {
        "role": "user",
        "content": "create a simple react counter component"
      }
    ]
  }'
```

### Responce 


```bash
import React, { useState } from 'react';

interface CounterProps {
}

const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center space-y-4">
      <div className="text-3xl font-bold text-slate-800">{count}</div>
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          disabled={count === 0}
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
```

<br />

**Note** <br>
[insta-appz](https://insta-appz.vercel.app) exports `YourApp.zip` via .tsx




