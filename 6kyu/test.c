#include <math.h>
#include <stdio.h>
// #include <stdlib.h>
#include <string.h>

// double find_average(const double array[/* length */], unsigned length)
// {
//   unsigned i = 0;
//   double n = 0;
//   while(i < length)
//     {
//     if (!isnan(array[i]))
//       {
//         n += array[i];
//     }
//     i++;
//   }
//   n = n / length;
// 	return n;
// }
#include <stdlib.h>
#include <ctype.h>

char *no_space(const char *str_in) {

  int c = 0;
  int j = 0;
  for (int i = 0; i < strlen(str_in); i++)
    {
    if (isalpha(str_in[i]))
      c++;
  }
  char *str = malloc((c + 1) * sizeof(char));

  for (int i = 0; str_in[i] != '\0'; i++)
  {
    if (!isspace(str_in[i]))
    {
      str[j] = str_in[i];
      j++;
    }
  }
  printf("//%d//\n", j);
  str[j] = '\0';
  printf("//%s//", str);
  return (str);
}

int main()
{
  char *ptr = "ee ee";
  no_space(ptr);
}
