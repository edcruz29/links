// Salvar links no Local Storage;
export async function saveLinks(key, newLink) {
  let linkStored = await getLinksStorage(key);

  // antes de salvar no local, preciso verificar se já existe algum ID,
  // Não posso deixar duplicar

  const hasLink = linkStored.some((link) => link.id === newLink.id);
  if (hasLink) {
    return;
  }
  // adicionar o novo link na lista
  linkStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linkStored));
}

// BuscarLink no Storage;

export async function getLinksStorage(key) {
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

// Deletar Link salvo no Storage;
export function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("@encurtarLink", JSON.stringify(myLinks));
  alert("Link excluído com sucesso!");

  return myLinks;
}
