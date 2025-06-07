<script>
  function likeReview(button) {
    const countSpan = button.nextElementSibling;
    let count = parseInt(countSpan.innerText);
    count++;
    countSpan.innerText = count;
  }
</script>
