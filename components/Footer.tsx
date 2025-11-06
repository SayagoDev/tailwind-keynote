import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <a href="/">
          <Logo className="h-12 w-auto text-slate-900" />
        </a>
        <p className="mt-6 text-center text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} DeceptiConf, LLC. Todos
          los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
