
export class BaseApiService {


  public static BACKEND_URL = 'https://angular-course-backend.firebaseio.com';


  protected deleteByIdEndpoint( id: string ): string {

    return BaseApiService.BACKEND_URL + '/data/' + id + '.json';
  }


  protected createEndpoint(): string {

    return BaseApiService.BACKEND_URL + '/data.json';
  }


  protected deleteAllEndpoint(): string {

    return BaseApiService.BACKEND_URL + '/data.json';
  }


  protected returnAllEndpoint(): string {

    return BaseApiService.BACKEND_URL + '/data.json';
  }

}
