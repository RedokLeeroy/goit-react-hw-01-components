export const Statistics = ({title, children}) => {
return <section class="statistics">
  {title && <h2 class="title">{title}</h2>}{children}
</section>
}