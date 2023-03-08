class classInstanceProvider {
  public static getInstance<T>(classType: { new (): T }): T {
    return new classType();
  }
}

export default classInstanceProvider;
