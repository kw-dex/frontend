export default function useEthereumProvider() {
  return (window as any).ethereum as any
}