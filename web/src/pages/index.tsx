
export type HomeProps = {
  betPoolCount: number;
};

export default function Home(props: HomeProps) {

  return (
    <h1>
      Hello world {props.betPoolCount}
    </h1>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json();

  return {
    props: {
      betPoolCount: data.betPoolCount
    }
  }
};
