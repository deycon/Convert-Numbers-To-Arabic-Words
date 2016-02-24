var billons = ["", "مليار", "ملياران", "ثلاثة مليارات", "اربعة مليارات", "خمسة مليارات", "ست مليارات", "سبعة مليارات", "ثمنية مليارات", "تسعة مليارات"]
    , millions  = ["", "مليون", "مليونان", "ثلاثة ملايين", "اربعة ملايين", "خمسة ملايين", "ست ملايين", "سبعة ملايين", "ثمنية ملايين", "تسعة ملايين"]
    , thousands = ["", "الف", "الفان", "ثلاثة الاف", "اربعة الاف", "خمسة الاف", "ست الاف", "سبعة الاف", "ثمانية الاف", "تسعة الاف"]
    , unit = ["", "واحد", "اثنان", "ثلاثة", "اربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة"]
    , tens = ["عشرة", "أحدا عشر", "اثنا عشر", "ثلاثة عشر", "اربعة عشر", "خمسة عشر", "ستة عشر", "سبعة عشر", "ثمانية عشر", "تسعة عشر"]
    , decs = ["", "عشرة", "عشرون", "ثلاثون", "اربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون"]
    , hundreds = ["", "مائه", "مئتان", "ثلثمائة", "اربعمائة", "خمسمائة", "ستمائة", "سبعمائة", "ثمانمائة", "تسعمائة"];
	
	map = {
		'0':'unit',
		'1':'tens',
		'2':'decs',
		'3':'hundreds',
		'4':'thousands',
		'5':'millions'
	}
	
	
$(document).ready(function(){
	$('#convert').focusout(function(){
			
			var NumberValue = $(this).val();
			var NumberLength = NumberValue.length;
			
			var out = '';
			var numcat = map[NumberLength];
			if(NumberLength == 1){
				$('.content').text('').append(unit[NumberValue]);
			}else if(NumberLength == 2){
				if(NumberValue[0] == 1){
					out = out + tens[NumberValue[1]];
				}else{
					out = out + unit[NumberValue[1]] +' و ' + decs[NumberValue[0]];
				}
				$('.content').text('').append(out);
			}else if(NumberLength == 3){
				for(var i = 1 ;i <= NumberLength ; i++){
					if(i == NumberLength -2 ){
						out = out + hundreds[NumberValue[i-1]];
					}else if(i == NumberLength -1){
						if(NumberValue[i-1] != 0 && NumberValue[i-1] == 1){
							out = out + ' و ' + tens[NumberValue[i]];
						}
					}else if(i == NumberLength){
						if(NumberValue[i-2] != 1){
							if(NumberValue[i-1] != 0 && NumberValue[i-2] != 0){
								out = out + ' و ' + unit[NumberValue[i-1]] + ' و ' + decs[NumberValue[i-2]];
							}else{
								 if(NumberValue[i-1] != 0 && NumberValue[i-2] == 0){
								    out = out + ' و '  + unit[NumberValue[i-1]];
							     }else{
									 if(NumberValue[i-1] == 0 && NumberValue[i-2] == 0){
									   
									 }else{
										 out = out + ' و '  + decs[NumberValue[i-2]];
									 }
								 }
								
							}
							
						}
					}
					
				}
				$('.content').text('').append(out);
			}else if(NumberLength == 4){
				for(var i = 1 ;i <= NumberLength ; i++){
					if(i == NumberLength -3 ){
						out = out + thousands[NumberValue[i-1]];
					}else if(i == NumberLength -2){
							if(NumberValue[i-1] != 0){
								out = out + ' و ' + hundreds[NumberValue[i-1]];
							}
					}else if(i == NumberLength -1){
						console.log(NumberValue[i-1],NumberValue[i],NumberValue[i-1] != 0 && NumberValue[i] != 0)
						if(NumberValue[i-1] == 0 && NumberValue[i] == 0){
							
						}else{
							if(NumberValue[i-1] == 1){
								out = out + ' و ' + tens[NumberValue[i]];
								i++;
							}else if(NumberValue[i-1] != 0 && NumberValue[i] != 0){
								out = out + ' و ' + unit[NumberValue[i]] + ' و ' + decs[NumberValue[i-1]];
								i++;
							}else if(NumberValue[i-1] != 0 && NumberValue[i] == 0){
								out = out + ' و ' +  decs[NumberValue[i-1]];
								i++;
							}else{
								out = out + ' و ' + unit[NumberValue[i]] ;
								i++;
							}
						}
					}
					
				}
				$('.content').text('').append(out);
				
			}else if(NumberLength == 5){
				for(var i = 1 ;i <= NumberLength ; i++){
					if(i == NumberLength -4 ){
						if(NumberValue[i-1] == 1){
							out = out + tens[NumberValue[i]] + ' الف ' ;
						}else{
							if(NumberValue[i] == 0 ){
								out = out + decs[NumberValue[i-1]] + ' الف ';
							}else{
								out = out + unit[NumberValue[i]] + ' و ' + decs[NumberValue[i-1]] + ' الف ';
							}
							
						}
						i++;
						
					}else if(i == NumberLength - 2){
						if(NumberValue[i-1] != 0){
							out = out + ' و ' + hundreds[NumberValue[i-1]];
						}
					}else if(i == NumberLength - 1){
						if(NumberValue[i-1] == 0 && NumberValue[i] == 0){
							
						}else{
							
							if(NumberValue[i-1] == 1){
								out = out + ' و ' + tens[NumberValue[i]];
							}else if(NumberValue[i-1] != 0 ){
								if(NumberValue[i] != 0){
									out = out + ' و ' + unit[NumberValue[i]] + ' و ' + decs[NumberValue[i-1]];
									//i++;
								}else{
									
									out = out + ' و '  + decs[NumberValue[i-1]];
								}
								
							}
							
						}
					}else if(i == NumberLength){
						console.log(NumberValue[i-1]);
						if(NumberValue[i-2] == 0){
							if(NumberValue[i-1] != 0){
								out = out + ' و ' + unit[NumberValue[i-1]];
							}
							
						}
					}
					
				}
				$('.content').text('').append(out);
				
			}else if(NumberLength == 6){
				for(var i = 1 ;i <= NumberLength ; i++){
					if(i == NumberLength -5 ){
						if(NumberValue[i] == 0 && NumberValue[i+1] == 0){
							out = out + hundreds[NumberValue[i-1]] +' الف ';
						}else{
							out = out + hundreds[NumberValue[i-1]]  ;
						}
						
					}else if(i == NumberLength -4){
						if(NumberValue[i-1] != 0  ){
							
								if(NumberValue[i-1] == 1){
									out = out + ' و ' + tens[NumberValue[i]] + ' الف ' ;
								}else{
									if(NumberValue[i] != 0){
										out = out + ' و ' + unit[NumberValue[i]] + ' و ' + decs[NumberValue[i-1]] +' الف ' ;
									}else{
										
										out = out + ' و ' + decs[NumberValue[i-1]] +' الف ' ;
									}
									
								}
							
						}else{
							
							if(NumberValue[i] != 0){
								out = out + ' و ' + unit[NumberValue[i]] + ' الف ';
							}
						}
						
					}else if(i == NumberLength - 3){
						
						if(NumberValue[i] !=0){
							out = out + ' و ' + hundreds[NumberValue[i]] ;
						}
					}else if(i == NumberLength - 2){
						
						if(NumberValue[i] != 0){
							if(NumberValue[i] == 1){
								out = out + ' و ' + tens[NumberValue[i+1]] ;
							}else{
								if(NumberValue[i+1] != 0){
									out = out + ' و ' + unit[NumberValue[i+1]] + ' و ' + decs[NumberValue[i]] ;
								}else{
									out = out + ' و '  + decs[NumberValue[i]] ;
								}
							}
							
						}else{
							if(NumberValue[i+1] != 0){
								out = out + ' و ' + unit[NumberValue[i+1]]
							}
							
						}
						
						i++;
						
					}
				}
				$('.content').text('').append(out);
				
			}else if(NumberLength == 7){
				for(var i = 1 ;i <= NumberLength ; i++){
					if(i == NumberLength - 6 ){
						out = out + millions[NumberValue[i-1]] ;
					}else if(i == NumberLength - 5){
						console.log(NumberValue[i],NumberValue[i+1])
						if(NumberValue[i-1] == 0 && NumberValue[i] == 0){
							
							out = out +  hundreds[NumberValue[i-1]] ;
						}else{
							if(NumberValue[i -1] != 0){
								if(NumberValue[i] == 0){
									out = out + ' و ' +  hundreds[NumberValue[i-1]] + ' الف ' ;
								}else{
									out = out + ' و ' +  hundreds[NumberValue[i-1]]  ;
								}
								
							}
							
						}
					}else if(i == NumberLength - 4){
						if(NumberValue[i-1] != 0){
							if(NumberValue[i-1] == 1){
								out = out + ' و ' + tens[NumberValue[i]] + ' الف ';
							}else{
								if(NumberValue[i] != 0){
									out = out + ' و ' + unit[NumberValue[i]] + ' و ' + decs[NumberValue[i-1]]+ ' الف ';
								}else{
									out = out + ' و '  + decs[NumberValue[i-1]]+ ' الف ';
								}
							}
							
						}else{
							if(NumberValue[i] != 0){
								out = out + ' و ' + unit[NumberValue[i]] + ' الف ';
							}
						}
						
					}else if(i == NumberLength - 3){
						
						if(NumberValue[i] != 0){
							out = out + ' و ' + hundreds[NumberValue[i]];
						}
					}else if(i == NumberLength - 2){
						if(NumberValue[i] !=0){
							if(NumberValue[i] == 1){
								out = out + ' و ' + tens[NumberValue[i+1]];
							}else{
								if(NumberValue[i+1] !=0){
									out = out + ' و ' + unit[NumberValue[i+1]] + ' و ' + decs[NumberValue[i]];
								}else{
									out = out + ' و ' + decs[NumberValue[i]];
								}
							}
							
						}else{
							if(NumberValue[i+1] !=0){
								out = out + ' و ' + unit[NumberValue[i+1]];
							}
						}
						
					}
				}
				$('.content').text('').append(out);
				
			}else if(NumberLength == 8){
				for(var i = 1 ;i <= NumberLength ; i++){
					
					if(i == NumberLength - 7){
						if(NumberValue[i-1] != 0){
							if(NumberValue[i-1] == 1){
								out = out + tens[NumberValue[i]] + ' مليون ';
							}else{
								if(NumberValue[i] != 0){
									out = out + unit[NumberValue[i]] + ' و ' + decs[NumberValue[i-1]] + ' مليون ';
								}else{
									out = out + decs[NumberValue[i-1]] + ' مليون ';
								}
							}
						}
						
					}else if(i == NumberLength - 6){
		
						if(NumberValue[i] != 0){
							if(NumberValue[i+1] == 0 && NumberValue[i+2] == 0){
								out = out + ' و ' + hundreds[NumberValue[i]] + ' الف ';
							}else{
								if(NumberValue[i+1] != 0){
									if(NumberValue[i+1] == 1){
										out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + tens[NumberValue[i+2]] + ' الف ' ;
									}else{
										
										if(NumberValue[i+2] != 0){
											out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + unit[NumberValue[i+2]] + ' و ' + decs[NumberValue[i+1]]+ ' الف ' ;
										}else{
											out = out + ' و ' + hundreds[NumberValue[i]] + ' و '  + decs[NumberValue[i+1]]+ ' الف ' ;
										}
										
									}
									
								}else{
									out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + unit[NumberValue[i+2]] + ' الف ' ;
									
								}
							}
						}else{
							if(NumberValue[i+1] != 0){
								if(NumberValue[i+1] == 1){
									out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + tens[NumberValue[i+2]] + ' الف ' ;
								}else{
									
									if(NumberValue[i+2] != 0){
										out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + unit[NumberValue[i+2]] + ' و ' + decs[NumberValue[i+1]]+ ' الف ' ;
									}else{
										out = out + ' و ' + hundreds[NumberValue[i]] + ' و '  + decs[NumberValue[i+1]]+ ' الف ' ;
									}
									
								}
								
							}else{
								if(NumberValue[i+2] != 0 ){
									out = out + ' و ' + unit[NumberValue[i+2]] + ' الف ' ;
								}
								
								
							}
							
						}
						
					}else if(i == NumberLength - 3){
						
						if(NumberValue[i] != 0){
							
								if(NumberValue[i+1] == 0 && NumberValue[i+2] == 0){
									 out = out + ' و ' + hundreds[NumberValue[i]];
								}else{
									if(NumberValue[i+1] !=0){
										if(NumberValue[i+1] == 1){
											out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + tens[NumberValue[i+2]]  ;
											
										}else{
											out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + unit[NumberValue[i+2]] + ' و ' + decs[NumberValue[i+1]];
											
										}
										
									}else{
										if(NumberValue[i+2] !=0){
											out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + unit[NumberValue[i+2]];
										}
									}
								}
								
								
							
						}else{
							
							if(NumberValue[i+1] !=0){
										if(NumberValue[i+1] == 1){
											out = out + ' و ' + tens[NumberValue[i+2]]  ;
											
										}else{
											if(NumberValue[i+2] !=0){
												out = out +  ' و ' + unit[NumberValue[i+2]] + ' و ' + decs[NumberValue[i+1]];
											}else{
												out = out +   ' و ' + decs[NumberValue[i+1]];
											}
											
											
										}
										
									}else{
										if(NumberValue[i+2] !=0){
											out = out + ' و ' + unit[NumberValue[i+2]];
										}
									}
							
						}
					}

				}
				$('.content').text('').append(out);
				
			}else if(NumberLength == 9){
				for(var i = 1 ;i <= NumberLength ; i++){
					if(i == NumberLength - 8){
						if(NumberValue[i-1] != 0 ){
							if(NumberValue[i] == 0 && NumberValue[i+1] == 0 ){
								out = out + hundreds[NumberValue[i-1]] + ' مليون ';
							}else{
							
								if(NumberValue[i] !=0){
									if(NumberValue[i] == 1){
										out = out + hundreds[NumberValue[i-1]] + ' و ' + tens[NumberValue[i+1]] + ' مليون ';
									}else{
										if(NumberValue[i+1] !=0){
											out = out + hundreds[NumberValue[i-1]] + ' و ' + unit[NumberValue[i+1]] + ' و ' + decs[NumberValue[i]] + ' مليون ';
										}else{
											out = out + hundreds[NumberValue[i-1]] + ' و '  + decs[NumberValue[i]] + ' مليون ';
										}
									}
								}else{
									
									if(NumberValue[i+1] !=0){
											out = out + hundreds[NumberValue[i-1]] + ' و ' + unit[NumberValue[i+1]] + ' مليون ';
										}
								}
								
							}
							
						}
					}else if(i == NumberLength - 5){
						
						if(NumberValue[i-1] != 0){
							if(NumberValue[i] == 0 && NumberValue[i+1] == 0){
								out = out + ' و ' + hundreds[NumberValue[i-1]] + ' الف ' ;
							}else{
								
								if(NumberValue[i] != 0){
									
									if(NumberValue[i] == 1 ){
										out = out + ' و ' + hundreds[NumberValue[i-1]] + ' و ' + tens[NumberValue[i+1]] + ' الف ' ;
									}else{
										if(NumberValue[i+1] != 0){
											out = out + ' و ' + hundreds[NumberValue[i-1]] + ' و ' + unit[NumberValue[i+1]] + ' و ' + decs[NumberValue[i]] + ' الف ' ;
										}else{
											out = out + ' و ' + hundreds[NumberValue[i-1]] + ' و ' + decs[NumberValue[i]] + ' الف ' ;
										}
										
									}
									
								}else{
									if(NumberValue[i+1] != 0){
										out = out + ' و ' + hundreds[NumberValue[i-1]] + ' و ' + unit[NumberValue[i+1]]  + ' الف ' ;
									}
								}
								
								
							}
						}else{
							if(NumberValue[i] != 0){
									
									if(NumberValue[i] == 1 ){
										out = out + ' و ' + tens[NumberValue[i+1]] + ' الف ' ;
									}else{
										if(NumberValue[i+1] != 0){
											out = out + ' و ' + unit[NumberValue[i+1]] + ' و ' + decs[NumberValue[i]] + ' الف ' ;
										}else{
											out = out + ' و ' + hundreds[NumberValue[i-1]] + ' و ' + decs[NumberValue[i]] + ' الف ' ;
										}
										
									}
									
								}else{
									if(NumberValue[i+1] != 0){
										out = out +  ' و ' + unit[NumberValue[i+1]]  + ' الف ' ;
									}
								}
						}
					}else if(i == NumberLength - 3){
						if(NumberValue[i] != 0){
							if(NumberValue[i+2] == 0 && NumberValue[i+1] == 0){
								out = out + ' و ' + hundreds[NumberValue[i]];
							}else{
								if(NumberValue[i+1] != 0){
									if(NumberValue[i+1] == 1){
										out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + tens[NumberValue[i+2]];
									}else{
										if(NumberValue[i+2] != 0 ){
											out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + unit[NumberValue[i+2]] + ' و '+ decs[NumberValue[i+1]];
										}else{
											out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' +  decs[NumberValue[i+1]];
										}
										
									}
								}else{
									if(NumberValue[i+2] != 0 ){
										out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + unit[NumberValue[i+2]] ;
									}
									
								}
								
							}
							
						}else{
							if(NumberValue[i+1] != 0){
									if(NumberValue[i+1] == 1){
										out = out  + ' و ' + tens[NumberValue[i+2]];
									}else{
										if(NumberValue[i+2] != 0 ){
											out = out + ' و ' + unit[NumberValue[i+2]] + ' و '+ decs[NumberValue[i+1]];
										}else{
											out = out + ' و ' +  decs[NumberValue[i+1]];
										}
										
									}
								}else{
									if(NumberValue[i+2] != 0 ){
										out = out  + ' و ' + unit[NumberValue[i+2]] ;
									}
									
								}
							
							
						}
					
					}
					
					
				}
				
				$('.content').text('').append(out);
				
				
			}else if(NumberLength == 10){
				for(var i = 1 ;i <= NumberLength ; i++){
					if(i == NumberLength -9){
						console.log();
						if(NumberValue[i-1] != 0){
							out = out + billons[NumberValue[i-1]] ;
						}
						
						
					}else if(i == NumberLength - 8){
						if(NumberValue[i-1] !=0){
							if(NumberValue[i] ==0 && NumberValue[i+1] ==0){
								out = out + ' و ' + hundreds[NumberValue[i-1]] + ' مليون ';
							}else{
								
								if(NumberValue[i] != 0){
									if(NumberValue[i] == 1){
										out = out + ' و ' + hundreds[NumberValue[i-1]] + ' و ' + tens[NumberValue[i+1]] + ' مليون ' ;
									}else {
										if(NumberValue[i+1] != 0){
											out = out + ' و ' + hundreds[NumberValue[i-1]] + ' و ' + unit[NumberValue[i+1]] + ' و ' + decs[NumberValue[i]] + ' مليون ' ;
										}else{
											out = out + ' و ' + hundreds[NumberValue[i-1]]  + ' و ' + decs[NumberValue[i]] + ' مليون ' ;
										}
									}
								}else{
									if(NumberValue[i+1] != 0){
											out = out + ' و ' + hundreds[NumberValue[i-1]] + ' و ' + unit[NumberValue[i+1]] + ' مليون ' ;
									}
								}
							}
							
						}else{
							
								if(NumberValue[i] != 0){
									if(NumberValue[i] == 1){
										out = out  + ' و ' + tens[NumberValue[i+1]] + ' مليون ' ;
									}else {
										if(NumberValue[i+1] != 0){
											out = out  + ' و ' + unit[NumberValue[i+1]] + ' و ' + decs[NumberValue[i]] + ' مليون ' ;
										}else{
											out = out + ' و ' + decs[NumberValue[i]] + ' مليون ' ;
										}
									}
								}else{
									if(NumberValue[i+1] != 0){
											out = out  + ' و ' + unit[NumberValue[i+1]] + ' مليون ' ;
									}
								}
						}
						
					}else if(i == NumberLength - 6){
						if(NumberValue[i] != 0){
							if(NumberValue[i+1] == 0 && NumberValue[i+2] == 0){
								out = out + ' و '+ hundreds[NumberValue[i]] + ' الف ' ;
							}else{
								if(NumberValue[i+1] != 0){
									if(NumberValue[i+1]  == 1){
										out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + tens[NumberValue[i+2]] + ' الف ' ;
									}else{
										if(NumberValue[i+2] != 0){
											out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + unit[NumberValue[i+2]] + ' و ' +decs[NumberValue[i+1]]+ ' الف ' ;
										}else{
											out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + decs[NumberValue[i+1]]+ ' الف ' ;
										}
									}
									
								}else{
									if(NumberValue[i+2] != 0){
										out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' +  unit[NumberValue[i+2]] +  ' الف ' ;
									}
									
								}
							}
						}else{
							
							if(NumberValue[i+1] != 0){
								if(NumberValue[i+1]  == 1){
									out = out + ' و '  + tens[NumberValue[i+2]] + ' الف ' ;
								}else{
									if(NumberValue[i+2] != 0){
										out = out + ' و '  + unit[NumberValue[i+2]] + ' و ' + decs[NumberValue[i+1]]+ ' الف ' ;
									}else{
										out = out + ' و '  + decs[NumberValue[i+1]]+ ' الف ' ;
									}
								}
								
							}else{
								if(NumberValue[i+2] != 0){
									out = out + ' و ' + unit[NumberValue[i+2]] +  ' الف ' ;
								}
								
							}
							
							
							
						}
					
					}else if(i == NumberLength - 3){
						
						if(NumberValue[i] != 0 ){
							if(NumberValue[i+1] == 0 && NumberValue[i+2] == 0){
								out = out + ' و ' + hundreds[NumberValue[i]];
							}else{
								if(NumberValue[i+1] !=0){
									if(NumberValue[i+1] == 1){
										out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + tens[NumberValue[i+2]];
									}else{
										if(NumberValue[i+2] != 0){
											out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + unit[NumberValue[i+2]] + ' و ' + decs[NumberValue[i+1]];
										}else{
											out = out + ' و ' + hundreds[NumberValue[i]] + ' و '  + decs[NumberValue[i+1]];
										}
									}
								}else{
									
									if(NumberValue[i+2] != 0){
										out = out + ' و ' + hundreds[NumberValue[i]] + ' و ' + unit[NumberValue[i+2]] ;
									}
								}
								
							}
						}else{
							
							if(NumberValue[i+1] !=0){
									if(NumberValue[i+1] == 1){
										out = out + ' و '  + tens[NumberValue[i+2]];
									}else{
										if(NumberValue[i+2] != 0){
											out = out + ' و '  + unit[NumberValue[i+2]] + ' و ' + decs[NumberValue[i+1]];
										}else{
											out = out + ' و '   + decs[NumberValue[i+1]];
										}
									}
								}else{
									
									if(NumberValue[i+2] != 0){
										out = out + ' و '  + unit[NumberValue[i+2]] ;
									}
								}
							
						}
					}
					
					
				}
					
				
				$('.content').text('').append(out);
				
			}
	
		
	});
	

	
});
	
