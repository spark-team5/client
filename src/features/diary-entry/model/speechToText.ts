export const SpeechToText = (url) => {
    const form = new FormData();
    const reader = new FileReader();
    
    reader.onloadend = function () {
      const base64Audio = reader.result.split(',')[1];
      form.append('environment', 'Production');
      form.append('audio', `data:audio/x-m4a;name=KakaoTalk_Audio_2025-02-09-16-30-07.m4a;base64,${base64Audio}`);
      
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA1NDYyMjgsIm5iZiI6MTc0MDU0NjIyOCwiZXhwIjoxNzUwNDYzOTk5LCJrZXlfaWQiOiJjYzI2YjZjMi0zNWExLTQ0NmEtODhkYS02ZjdkZGExNDMzYWMifQ.tqRvmEibKaRZUJK9m7pp7ZOWsdzy2rGg8YxjQ1MrSDk'
        }
      };
      
      options.body = form;
      
      fetch('https://api-cloud-function.elice.io/76bff628-acfc-45a2-9c39-e3dd316f33f2/transcribe', options)
        .then(res => res.json())
        .then(res => {
          if (res.status === "ok" && res.transcription && res.transcription.utterances.length > 0) {
            const transcription = res.transcription.utterances[0].msg; // 여기에서 msg만 추출
            console.log(transcription); // 추출된 텍스트 출력
          } else {
            console.error('Transcription failed or no utterances found.');
          }
        })
        .catch(err => console.error(err));
    };
  
    reader.readAsDataURL(url); // 파일을 읽음
  };
  