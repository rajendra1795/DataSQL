import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarHome() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">REAL ESTATE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/AccountType">AccountType</Nav.Link>
            <Nav.Link href="CommissionEntry">CommissionEntry</Nav.Link>
            <Nav.Link href="/Commissions">Commissions</Nav.Link>
            <Nav.Link href="/Customer">Customer</Nav.Link>
            <Nav.Link href="/CustomerDocuments">CustomerDocuments</Nav.Link>
            <Nav.Link href="/Designations">Designations</Nav.Link>
            <Nav.Link href="/Dummy">Dummy</Nav.Link>
            <Nav.Link href="/EmployeeDocuments">EmployeeDocuments</Nav.Link>
            <Nav.Link href="/Employees">Employees</Nav.Link>
            <Nav.Link href="LandDocuments">LandDocuments</Nav.Link>
            <Nav.Link href="/Lands">Lands</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Passbook">Passbook</Nav.Link>
            <Nav.Link href="/PassbookDocuments">PassbookDocuments</Nav.Link>
            <Nav.Link href="/Payments">Payments</Nav.Link>
            <Nav.Link href="/PlotPayments">PlotPayments</Nav.Link>
            <Nav.Link href="/Plots">Plots</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/Roles">Roles</Nav.Link>
            <Nav.Link href="/Users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavbarHome;