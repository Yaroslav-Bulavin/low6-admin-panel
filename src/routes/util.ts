import { TArgsWithParams, TRoutesArgs } from '@/routes/types';

export function createPath(args: TRoutesArgs) {
  let path: string = args.path;

  if (args.hasOwnProperty('params')) {
    path = Object.entries((args as any).params).reduce(
      (previousValue: string, [param, value]) =>
        previousValue.replace(`:${param}`, '' + value),
      args.path,
    );
  }

  if (
    args.hasOwnProperty('searchParams') &&
    typeof args.searchParams === 'object'
  ) {
    const searchParams = new URLSearchParams(
      args.searchParams as Record<string, string>,
    );
    const queryString = searchParams.toString();

    if (queryString) {
      path += (path.includes('?') ? '&' : '?') + queryString;
    }
  }

  return path;
}

export const addIdToRoute = (path: string, providedId: string | undefined) =>
  path.replace('/:id', `/${providedId ?? '/:id'}`);
