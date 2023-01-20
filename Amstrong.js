function Armstrong()
	{
		var flag,number,remainder,addition = 0;
		number = Number(document.getElementById("N").value);

		flag = number;
		while(number > 0)
		{
			remainder = number%10;
			addition = addition + remainder*remainder*remainder;
			number = parseInt(number/10);
		}

		if(addition == flag)
		{
			window.alert("-The inputed number is Armstrong");
		}
		else
		{
			window.alert("-The inputed number is not Armstrong");
		}
	}