import { RootProvider } from 'fumadocs-ui/provider/next';
import "../../styles/globals.css"

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <RootProvider>
      <div className="flex flex-col min-h-screen">{children}</div>
    </RootProvider>
  );
}
