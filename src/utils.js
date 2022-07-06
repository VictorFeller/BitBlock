//Convert balance from Wei unit to BNB unit
export function convertBalanceToBnB(amoundBnb) {
  const divideFactor = 10e17;
  return amoundBnb / divideFactor;
}
