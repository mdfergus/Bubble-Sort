describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array of a single pair', function(){
    expect( bubbleSort([8, 3]) ).toEqual( [3, 8] );
  });

  it('handles an array of multiple elements', function(){
    expect( bubbleSort([8, 3, 12, 4, 5, 15]) ).toEqual( [3, 4, 5, 8, 12, 15] );
  });

  it('handles an array of multiple elements', function(){
    expect( bubbleSort([8, 3, 12, 4, 5, 15, 56, 75, 34, 78, 6, 36, 32, 9, 95, 13]) ).toEqual( [3, 4, 5, 6, 8, 9, 12, 13, 15, 32, 34, 36, 56, 75, 78, 95] );
  });
});
