interface Props {
  className?: string;
}

const ChaosOrb = ({ className = "h-8 w-8" }: Props) => (
  <img
    src="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png"
    alt="Chaos Orb"
    className={className}
  />
);

export default ChaosOrb;
