import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to='/servants'>Servants</Link>
    </div>
  );
}
