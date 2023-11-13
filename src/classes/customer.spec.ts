import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  fantasyName: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, fantasyName, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('Individual Customer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Gabriel', 'Lucas', '111.111');
    expect(sut).toHaveProperty('firstName', 'Gabriel');
    expect(sut).toHaveProperty('lastName', 'Lucas');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods to get name and idn for Individual Customer', () => {
    const sut = createIndividualCustomer('Gabriel', 'Lucas', '111.111');
    expect(sut.getName()).toBe('Gabriel Lucas');
    expect(sut.getIDN()).toBe('111.111');
  });
});

describe('Enterprise Customer', () => {
  it('should have name, fantasyName and cnpj', () => {
    const sut = createEnterpriseCustomer('Company', 'Company Name', '111111');
    expect(sut).toHaveProperty('name', 'Company');
    expect(sut).toHaveProperty('fantasyName', 'Company Name');
    expect(sut).toHaveProperty('cnpj', '111111');
  });

  it('should have methods to get name and idn for Enterprise Customer', () => {
    const sut = createEnterpriseCustomer('Company', 'Company Name', '111111');
    expect(sut.getName()).toBe('Company');
    expect(sut.getIDN()).toBe('111111');
  });
});
