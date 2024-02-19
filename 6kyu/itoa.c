#include <stdlib.c>

int	intlen(long int n)
{
	int	len;

	len = 0;
	if (n < 0)
	{
		n = n * -1;
		len++;
	}
	while (n > 0)
	{
		n = n / 10;
		len++;
	}
	return (len);
}

char	*ft_itoa(int n)
{
	long int	a;
	char		*p;
	int			len;

	a = n;
	len = intlen(n);
	if (a == 0)
		len++;
	p = (char *)malloc(len + 1);
	if (!p)
		return (NULL);
	p[len--] = '\0';
	if (a == 0)
		p[0] = '0';
	if (a < 0)
	{
		a = a * -1;
		p[0] = '-';
	}
	while (a > 0)
	{
		p[len--] = (a % 10) + '0';
		a = a / 10;
	}
	return (p);
}
